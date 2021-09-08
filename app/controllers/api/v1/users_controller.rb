class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user, except:[:index,:create]

  def index
    render json: User.select(:id,:username,:email,:role).all.to_json
  end

  def show
    begin
      user = User.find(params[:id])
      render json: user.as_json(only:[:id,:username,:email,:role])
    rescue => exception
      render json: {error:{message:"User not found"}}
    end
  end

  def create
    user = User.create(user_params)
    if user.valid? and user.save
      render json: user.as_json(only:[:id,:email,:username,:role])
    else
      render json: {error: user.errors.messages}, status: 422
    end
  end

  def update
    begin
      if current_user.update(user_params)
        render json: current_user.to_json
      else
        render json: { errors: current_user.errors }, status: :unprocessable_entity
      end
    rescue => exception
      render json: { errors: "Not Authorized" }
    end
  end

  def destroy
    begin
      user = User.find(params[:id])
      if user.id == current_user.id or current_user.role == 'admin'
        if user.destroy()
          render json: {message:"User #{user.email} was deleted"}
        else
          render json: { errors: user.errors }, status: :unprocessable_entity
        end
      else
        render json: { errors: "Access denied" }
      end
      
    rescue => exception
      render json: exception
    end
  end
  

  private
    def user_params
      params.require(:user).permit(:username,:email,:password, :password_confiramation,:role,:status)
    end

end
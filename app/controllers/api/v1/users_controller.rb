class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user, except: [:index,:create]

  def index
    render json: User.all
  end

  def show
    begin
      user = User.find(params[:id])
      render json: user.as_json(only:[:id,:username,:email,:role])
    rescue => exception
      render json: {error:{message:exception}}
    end
  end

  def create
    begin
      user = User.create(user_params)
      if user.valid? and user.save
        render json: user.as_json(only:[:id,:email,:username,:role])
      else
        render json: {error: user.errors.messages}, status: 422
      end
    rescue => exception
      render json: {error:{message:exception}}
    end
    
  end

  def update
    begin
      user = User.find(params[:id])
      if(!isAdminOrOwner(current_user,user))
        render json:{error:{message:"Access denied"}},status:401
        return
      end
      if user.update(user_params)
        render json: user.to_json
      else
        render json: { errors: user.errors }, status: :unprocessable_entity
      end
    rescue => exception
      render json: {error:{message:exception}}
    end
  end

  def destroy
    begin
      user = User.find(params[:id])
      if(!isAdminOrOwner(current_user,user))
        render json:{error:{message:"Access denied"}},status:401
				return
      end
      if user.destroy()
        render json: {message:"User #{user.email} was deleted"}
      else
        render json: { errors: user.errors }, status: :unprocessable_entity
      end
    rescue => exception
      render json: exception
    end
  end
  

  private
    def user_params
      params.require(:user).permit(:username,:email,:password, :password_confiramation,:role,:status)
    end

    def isAdminOrOwner(current_user,user)
			isAdmin = current_user.role == "admin"
			isOwner = current_user.id == user.id
			isAdmin || isOwner
		end

end
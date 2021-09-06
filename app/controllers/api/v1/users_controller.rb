class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render json: User.select(:id,:username,:email,:role,:create_at).all.to_json
  end

  def show
    render json: User.select(:id,:username,:email,:role,:create_at).find(params[:id]).to_json
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user.to_json
    else
      render json: {error: user.errors.messages}, status: 422
    end
  end

  def update
    user = User.find(params[:id])

    if user.update(user_params)
      render json: user.to_json
    else
      render json: {error: user.errors.messages}, status: 422
    end
  end

  def destroy
    begin
      user = User.find(params[:id])
    if user.destroy
      head :no_content
    else
      render json: {error: user.errors.messages}, status: 422
    end
    rescue => exception
      render json: {error: "User not found"}, status: 404
    end
    
  end
  

  private
    def user_params
      params.require(:user).permit(:username,:email,:password,:role,:status)
    end

end
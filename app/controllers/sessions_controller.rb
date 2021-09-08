class SessionsController < Devise::SessionsController
    def create
      begin
        user = User.find_by_email(params[:email])
      if user && user.valid_password?(params[:password])
        response = {
            user: user.as_json(only:[:id,:username,:email,:role]),
            token: user.generate_jwt
        }

        render json: response
      else
        render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
      end
      rescue => exception
        render json: exception
      end
    end
  end
class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  private
  def authenticate_user
    puts request.headers['Authorization']
      if request.headers['Authorization'].present?
        authenticate_or_request_with_http_token do |token|
          begin
            jwt_payload = JWT.decode(token, Rails.application.secrets.secret_key_base).first
            
            @current_user_id = jwt_payload['id']
          rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
            head :unauthorized
          end
        end
      else
        return head :unauthorized
      end
  end

  def current_user
    @current_user ||= super || User.find(@current_user_id)
  end
end

class Api::V1::ProfilesController < ApplicationController
	before_action :authenticate_user, except: [:index]

	def index
		render json: Profile.all
	end

	def show
		begin
			profile = Profile.find(params[:id])
			render json: profile.as_json(only:[:id,:name,:gender,:city,:birthday])
		rescue => exception
			render json: {error:{message:exception}}
		end
	end

	def create
		profile = current_user.profiles.build(profile_params)
		if profile.valid? and profile.save
		  render json: profile.as_json
		else
		  render json: {error: profile.errors.messages}
		end
	end

	def update
    begin
			user = current_user
			profile = Profile.find(params[:id])

			if(!isAdminOrOwner(user,profile))
				render json:{error:{message:"Access denied"}},status:401
				return
			end

      if profile.update(profile_params)
        render json: profile.to_json
      else
        render json: { errors: profile.errors }, status: :unprocessable_entity
      end
    rescue => exception
      render json: {error:{message:exception}}
    end
  end

	def destroy
    begin
			user = current_user
      profile = Profile.find(params[:id])

			if(!isAdminOrOwner(user,profile))
				render json:{error:{message:"Access denied"}},status:401
				return
			end

			if profile.destroy()
				render json: {message:"Profile #{profile.name} was deleted"}
			else
				render json: { errors: profile.errors }, status: :unprocessable_entity
			end
    rescue => exception
      render json: {error:{message:exception}}
    end
  end

	private
    def profile_params
      params.require(:profile).permit(:name,:gender,:city,:birthday)
    end
		
		def isAdminOrOwner(user,profile)
			isAdmin = user.role == "admin"
			isOwner = user.id == profile.user_id
			isAdmin || isOwner
		end
end
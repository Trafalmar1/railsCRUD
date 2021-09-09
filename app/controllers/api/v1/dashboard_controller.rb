class Api::V1::DashboardController < ApplicationController
	before_action :authenticate_user

	def index
		user_count = User.count
		profile_count = Profile.count
		over18_count = Profile.where("birthday <=?", 18.years.ago).count

		render json: {
			user_count: user_count,
			profile_count: profile_count,
			profiles_over_18: over18_count
		}
	end
end
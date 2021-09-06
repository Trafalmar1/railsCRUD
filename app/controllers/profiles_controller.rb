class ProfilesController < ApplicationController
    def create
        @user = User.find(params[:user_id])
        @profile = @user.profiles.create(profile_params)
        redirect_to user_path(@user)
    end

    def destroy
        @user = User.find(params[:user_id])
        @profile = @user.profiles.find(params[:id])
        @profile.destroy
        redirect_to user_path(@user)
    end

    private
        def profile_params
            params.require(:profile).permit(:name,:birthday,:city,:gender,:status)
        end
end

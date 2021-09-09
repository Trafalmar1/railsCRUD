Rails.application.routes.draw do
  root 'static#index'
  devise_for :users, controllers: { sessions: :sessions },
                        path_names: { sign_in: :login }
  namespace :api, defaults:{format: 'json'} do
    namespace :v1 do
      resources :users
      resources :profiles
    end 
  end
  get "*page", to:'static#index',constaint: ->(req) do
    !req.xhr? && req.format.html?
  end
end

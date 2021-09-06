Rails.application.routes.draw do
  root 'static#index'
  namespace :api do
    namespace :v1, defaults:{format: 'json'} do
      resources :users
      resources :profiles
    end  
  end
end

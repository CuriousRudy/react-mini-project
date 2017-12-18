Rails.application.routes.draw do
  get 'stop/create'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :appointments

    end
  end
end

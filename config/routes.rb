Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/addcourse', to: 'homes#index'
  get '/addround', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :rounds, only: [:index, :create]
      resources :courses, only: [:create, :index]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

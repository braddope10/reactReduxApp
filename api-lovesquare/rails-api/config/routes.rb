Rails.application.routes.draw do
  resources :profiles
  resources :comments
  resources :posts
  resources :users
end

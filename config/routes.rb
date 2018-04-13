Rails.application.routes.draw do
  devise_for :users
  root to: "welcome#home"

  resources :lists, only: [:show] do
    resources :links, only: [:show]
  end

end

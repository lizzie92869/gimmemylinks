Rails.application.routes.draw do
  devise_for :users
  root to: "welcome#home"

  resources :lists do
  	collection do
  		get :high_priority
  		get :recent
  		get :old
  	end
    resources :links
  end

end

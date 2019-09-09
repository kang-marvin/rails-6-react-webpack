Rails.application.routes.draw do
  root to: 'rails_app#index'

  # ! This line gives back react controll of the routes
  # ! where NotFound component is rendered.
  match '*path', to: 'rails_app#index', via: :all
end

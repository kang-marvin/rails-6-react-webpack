Rails.application.routes.draw do
  root to: 'goals#index'

  # ! This line gives back react controll of the routes
  # ! where NotFound component is rendered.
  match '*path', to: 'goals#index', via: :all
end

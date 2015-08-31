Rails.application.routes.draw do
  devise_for :customers,
             path: 'customer',
             controllers: {
               sessions: 'customer/sessions',
               registrations: 'customer/registrations',
               confirmations: 'customer/confirmations'
             }

  root 'landing#index'
  get 'privacy', to: 'landing#privacy'

  namespace :customer do
    get '/:id', to: 'dashboard#home'
    resources
  end
end

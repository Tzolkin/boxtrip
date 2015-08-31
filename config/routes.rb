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
    scope ':customer_id' do
      get '/', to: 'dashboard#home'
      resources :btrips do
      end
    end
  end
end

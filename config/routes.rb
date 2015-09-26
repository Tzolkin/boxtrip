Rails.application.routes.draw do
  devise_for :customers,
             path: 'customer',
             controllers: {
               sessions: 'customer/sessions',
               registrations: 'customer/registrations',
               confirmations: 'customer/confirmations'
             }
  devise_for :partners,
             path: 'partner',
             controllers: {
               sessions: 'partner/sessions',
               registrations: 'partner/registrations',
               confirmations: 'partner/confirmations'
             }

  root 'landing#index'
  get 'privacy', to: 'landing#privacy'
  namespace :btrips do
    get '/', to: 'services#index'
    get '/thanks', to: 'services#thanks'
    resources :tailoreds, only: [:index, :create, :new]
    resources :yolos, only: [:index, :create, :new] do
      put '/confirm', to: 'yolos#confirm'
    end
  end

  namespace :customer do
    scope ':customer_id' do
      get '/', to: 'dashboard#home'
      resources :btrips do
      end
    end
  end

  namespace :partner do
    scope ':partner_id' do
      get '/', to: 'dashboard#home'
    end
  end
end

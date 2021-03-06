Rails.application.routes.draw do
  devise_for :admins, path: 'admin', skip: :registrations
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
    resources :yolos, only: [:index, :create, :new, :update] do
      get '/confirm', to: 'yolos#confirm'
    end
    get 'yolos/calc_estimated', to: 'yolos#calc_estimated'
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

  namespace :admin do
    scope ':admin_id' do
      get '/', to: 'dashboard#home'
    end
  end
end

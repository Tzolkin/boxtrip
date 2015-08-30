Rails.application.routes.draw do
  devise_for :customers,
             path: 'customer',
             controllers: {
               sessions: 'customer/sessions',
               registrations: 'customer/registrations',
               confirmations: 'customer/confirmations'
             }

  namespace :customer do
    get '/:id', to: 'dashboard#home'
  end
end

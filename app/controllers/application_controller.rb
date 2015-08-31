class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  decent_configuration do
    strategy DecentExposure::StrongParametersStrategy
  end

  unless Rails.env.development?
    rescue_from ActiveRecord::RecordNotFound do
      redirect_to request.referer || root_path, alert: 'Este registro no existe o no se puede acceder a el en este momento'
    end
  end

  protected

  def after_sign_in_path_for(resource)
    if resource.class == Customer
      if current_customer.sign_in_count == 1
        customer_services_path
      else
        customer_path(current_customer.id)
      end
    elsif resource.class == Partner
      partner_path
    end
  end

  def after_sign_out_path_for(_resource)
    root_path
  end

  def devise_parameter_sanitizer
    super # Use the default one
  end
end

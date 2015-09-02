class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  decent_configuration do
    strategy DecentExposure::StrongParametersStrategy
  end

  unless Rails.env.development?
    rescue_from ActiveRecord::RecordNotFound do
      redirect_to request.referer || root_path, alert: I18n.t('activerecord.not_found')
    end
  end

  protected

  def after_sign_in_path_for(resource)
    if resource.class == Customer
      if current_customer.sign_in_count == 1
        new_customer_btrip_path(current_customer.id)
      else
        customer_path(current_customer.id)
      end
    elsif resource.class == Partner
      partner_path(current_partner.id)
    end
  end

  def after_sign_out_path_for(_resource)
    root_path
  end

  def devise_parameter_sanitizer
    super # Use the default one
  end
end

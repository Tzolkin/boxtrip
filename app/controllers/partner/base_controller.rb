class Partner
  class BaseController < ApplicationController
    before_action :authenticate_partner!
  end
end

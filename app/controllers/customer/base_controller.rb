class Customer
  class BaseController < ApplicationController
    before_action :authenticate_customer!
  end
end

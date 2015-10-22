class Admin
  class DashboardController < BaseController
    layout 'admin'

    def home
      @tailoreds = Tailored.all
      @yolos = Yolo.all
    end
  end
end

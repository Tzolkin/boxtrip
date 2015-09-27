# Preview all emails at http://localhost:3000/rails/mailers/btrips_mailer
class BtripsMailerPreview < ActionMailer::Preview
  def sample_mail_preview
    BtripsMailer.sample_email(CustomerInfo.first)
  end

  def tailored_preview
    BtripsMailer.tailored(Tailored.first.customer_info)
  end

  def yolo_preview
    BtripsMailer.yolo(Yolo.first)
  end
end

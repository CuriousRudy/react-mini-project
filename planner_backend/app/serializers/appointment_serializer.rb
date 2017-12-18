class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :content, :location, :owner

  def owner
    user = User.find("#{object.user_id}")
    return "#{user.first_name} #{user.last_name}"
  end
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :user_appointments

  def full_name
     "#{object.first_name} #{object.last_name}"
  end

  def user_appointments
  	object.appointments.map do |appointment|
  		{id: appointment.id,
        title: appointment.title,
        date: appointment.date,
        content: appointment.content,
        location: appointment.location,
        user_id: appointment.user_id
    }
end
  end

end

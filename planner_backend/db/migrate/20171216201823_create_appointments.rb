class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.integer :user_id
      t.string :title
      t.text :content
      t.string :location
      t.string :date

      t.timestamps
    end
  end
end

class CreateRounds < ActiveRecord::Migration[5.2]
  def change
    create_table :rounds do |t|
      t.belongs_to :user, null: false
      t.belongs_to :course, null: false

      t.integer :score, null: false
      
      t.timestamps
    end
  end
end

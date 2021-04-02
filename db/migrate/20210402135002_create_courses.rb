class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :name, null: false
      t.integer :par, null: false
      t.integer :slope_rating, null: false
      t.float :course_rating, null: false
      t.integer :hole_one_par
      t.integer :hole_two_par
      t.integer :hole_three_par
      t.integer :hole_four_par
      t.integer :hole_five_par
      t.integer :hole_six_par
      t.integer :hole_seven_par
      t.integer :hole_eight_par
      t.integer :hole_nine_par
      t.integer :hole_ten_par
      t.integer :hole_eleven_par
      t.integer :hole_twelve_par
      t.integer :hole_thirteen_par
      t.integer :hole_fourteen_par
      t.integer :hole_fifteen_par
      t.integer :hole_sixteen_par
      t.integer :hole_seventeen_par
      t.integer :hole_eighteen_par

      t.timestamps
    end
  end
end

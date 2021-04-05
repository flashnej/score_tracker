# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_02_140917) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "courses", force: :cascade do |t|
    t.string "name", null: false
    t.integer "par", null: false
    t.integer "slope_rating", null: false
    t.float "course_rating", null: false
    t.integer "hole_one_par"
    t.integer "hole_two_par"
    t.integer "hole_three_par"
    t.integer "hole_four_par"
    t.integer "hole_five_par"
    t.integer "hole_six_par"
    t.integer "hole_seven_par"
    t.integer "hole_eight_par"
    t.integer "hole_nine_par"
    t.integer "hole_ten_par"
    t.integer "hole_eleven_par"
    t.integer "hole_twelve_par"
    t.integer "hole_thirteen_par"
    t.integer "hole_fourteen_par"
    t.integer "hole_fifteen_par"
    t.integer "hole_sixteen_par"
    t.integer "hole_seventeen_par"
    t.integer "hole_eighteen_par"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rounds", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "course_id", null: false
    t.integer "score", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_rounds_on_course_id"
    t.index ["user_id"], name: "index_rounds_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end

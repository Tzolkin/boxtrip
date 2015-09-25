# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150925044717) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string   "description"
    t.integer  "floor"
    t.boolean  "lift"
    t.integer  "building_type_id"
    t.integer  "destination_type_id"
    t.integer  "btrip_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "btrips", force: :cascade do |t|
    t.integer  "customer_id"
    t.datetime "moving_date"
    t.string   "btrip_type",  default: "quote"
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "building_types", force: :cascade do |t|
    t.string "name"
  end

  create_table "customer_infos", force: :cascade do |t|
    t.string   "name"
    t.string   "paternal_name"
    t.string   "maternal_name"
    t.string   "email"
    t.string   "phone_number"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "customers", force: :cascade do |t|
    t.string   "name"
    t.string   "paternal_name"
    t.string   "maternal_name"
    t.string   "lada"
    t.string   "number"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "customers", ["email"], name: "index_customers_on_email", unique: true, using: :btree
  add_index "customers", ["reset_password_token"], name: "index_customers_on_reset_password_token", unique: true, using: :btree

  create_table "destination_types", force: :cascade do |t|
    t.string "name"
  end

  create_table "extra_services", force: :cascade do |t|
    t.integer  "btrip_id"
    t.boolean  "origin_flown"
    t.boolean  "destination_flown"
    t.boolean  "inventory_fragile"
    t.boolean  "trash"
    t.boolean  "packaging"
    t.boolean  "unpaked"
    t.boolean  "accompany_supplier"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "partner_addresses", force: :cascade do |t|
    t.integer  "partner_id"
    t.string   "street"
    t.string   "internal_number"
    t.string   "suburb"
    t.string   "state"
    t.string   "municipality"
    t.string   "postal_code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "partners", force: :cascade do |t|
    t.string   "name"
    t.string   "paternal_name"
    t.string   "maternal_name"
    t.string   "lada"
    t.string   "number"
    t.date     "birthdate"
    t.boolean  "has_vehicle"
    t.boolean  "bank_account"
    t.boolean  "smartphone"
    t.boolean  "good_health"
    t.string   "hear_about_us"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "partners", ["email"], name: "index_partners_on_email", unique: true, using: :btree
  add_index "partners", ["reset_password_token"], name: "index_partners_on_reset_password_token", unique: true, using: :btree

  create_table "tailoreds", force: :cascade do |t|
    t.integer  "customer_info_id"
    t.date     "business_partner"
    t.decimal  "quotation"
    t.decimal  "price"
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "vehicles", force: :cascade do |t|
    t.integer "partner_id"
    t.integer "year"
    t.string  "manufacturer"
    t.string  "model"
  end

  create_table "yolos", force: :cascade do |t|
    t.integer  "customer_info_id"
    t.string   "source_address"
    t.float    "source_lan"
    t.float    "source_lng"
    t.string   "destination_address"
    t.float    "destination_lan"
    t.float    "destination_lng"
    t.integer  "items_number"
    t.datetime "estimated_date"
    t.decimal  "quotation"
    t.decimal  "price"
    t.boolean  "accepted_conditions"
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

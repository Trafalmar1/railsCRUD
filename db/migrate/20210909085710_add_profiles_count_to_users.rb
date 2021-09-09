class AddProfilesCountToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :profiles_count, :integer
  end
end

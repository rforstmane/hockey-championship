class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :number
      t.string :position
      t.string :club
      t.integer :team_id, index: true, foreign_key: true

      t.timestamps
    end
  end
end

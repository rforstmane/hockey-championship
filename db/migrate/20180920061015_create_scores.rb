class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.integer :home_team_id, index: true, foreign_key: true
      t.integer :visitor_team_id, index: true, foreign_key: true
      t.integer :home_goals, default: 0
      t.integer :visitor_goals, default: 0
      t.boolean :overtime, default: false

      t.timestamps
    end
  end
end

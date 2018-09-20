class Score < ApplicationRecord
  belongs_to :home_team, class_name: 'Team'
  belongs_to :visitor_team, class_name: 'Team'

  def points_for_winner_team
    return 0 if winner_team.nil?
    return 2 if overtime
    3
  end

  def winner_team
    if home_goals > visitor_goals
      home_team
    elsif home_goals < visitor_goals
      visitor_team
    else
      nil
    end
  end
end

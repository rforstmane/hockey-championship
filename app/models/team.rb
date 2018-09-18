class Team < ApplicationRecord
  def full_name
    "#{code} : #{title}"
  end
end

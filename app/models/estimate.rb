class Estimate
  attr_accessor :distance, :items, :mins

  def initialize(distance, items, mins)
    @distance = distance.to_i
    @items = items.to_i
    @mins = mins.to_i
  end

  def distance_to_km
    (distance.to_f / 1000).round
  end

  def calculate
    mins_to_load = items * (prices[:mins_to_up] + prices[:mins_to_down])
    distance_to_road = distance_to_km * prices[:transfer_km]
    # mins_to_road = mins * prices[:transfer_min]
    price_to_load = mins_to_load * prices[:move_mins]

    total = prices[:base] + distance_to_road + price_to_load
    {
      grand_total: total,
      description: {
        base: prices[:base],
        mins_to_load: mins_to_load,
        distance_to_road: distance_to_road,
        price_to_load: price_to_load
      }
    }
  end

  private

  def prices
    {
      base: Figaro.env.price_base.to_i,
      move_mins: Figaro.env.move_mins.to_i,
      transfer_km: Figaro.env.transfer_km.to_i,
      transfer_min: Figaro.env.transfer_min.to_i,
      mins_to_up: Figaro.env.mins_to_up.to_i,
      mins_to_down: Figaro.env.mins_to_down.to_i,
    }
  end
end

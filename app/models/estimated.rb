class Estimate
  attr_accesor :distance

  def to_km
    (distance.to_f / 1000)
  end

  def calculate
    # to_km
  end
end

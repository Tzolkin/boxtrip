module ApplicationHelper
  def flash_class(level)
    {
      notice:  'alert alert-info',
      success: 'alert alert-success',
      alert:   'alert alert-warning',
      error:   'alert alert-danger'
    }[level.to_sym]
  end

  def country_states
    [
      'Distrito Federal',
      'Estado de Mexico',
      'Guadalajara',
      'Monterrey'
    ]
  end

  def social_medias
    [
      'Facebook',
      'Twitter',
      'Google',
      'Noticias',
      'Un amigo/conocido',
      'Un familiar',
      'Un proveedor Boxtrip',
      'Otro'
    ]
  end
end

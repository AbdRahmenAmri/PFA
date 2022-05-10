# Permission ==> request.user and request.auth :
"""Permission checks will typically use the authentication information in the
request.user and request.aut  properties  to determine if the incoming request
  should be permitted.
  Custom permission : To implement , override BasePermission and implement
  either or both , of the following methods :
  ==> .has_permission(self, request, view)
  ==> .has_object_permission(self, request, view, obj)
  """


# TODO : 1/ create a permission class for the user configuration profile



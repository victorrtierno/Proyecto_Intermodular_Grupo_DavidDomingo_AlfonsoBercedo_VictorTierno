package vo;

public class EmpleadoVo {

    private int id;
    private String dni;
    private String nombre;
    private String prApellido;
    private String sgApellido;
    private String usuario;
    private String contrasena;
    private String rol;

    // Constructor vacío por si necesitas crear un objeto sin datos iniciales
    public EmpleadoVo() {
    }

    // Constructor con todos los parámetros
    public EmpleadoVo(int id, String dni, String nombre, String prApellido, String sgApellido, String usuario, String contrasena, String rol) {
        this.id = id;
        this.dni = dni;
        this.nombre = nombre;
        this.prApellido = prApellido;
        this.sgApellido = sgApellido;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.rol = rol;
    }

    // Getters
    public int getId() { return id; }
    public String getDni() { return dni; }
    public String getNombre() { return nombre; }
    public String getPrApellido() { return prApellido; }
    public String getSgApellido() { return sgApellido; }
    public String getUsuario() { return usuario; }
    public String getContrasena() { return contrasena; }
    public String getRol() { return rol; }

    // Setters
    public void setId(int id) { this.id = id; }
    public void setDni(String dni) { this.dni = dni; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public void setPrApellido(String prApellido) { this.prApellido = prApellido; }
    public void setSgApellido(String sgApellido) { this.sgApellido = sgApellido; }
    public void setUsuario(String usuario) { this.usuario = usuario; }
    public void setContrasena(String contrasena) { this.contrasena = contrasena; }
    public void setRol(String rol) { this.rol = rol; }

    @Override
    public String toString() {
        return "Empleado: " + nombre + " " + prApellido + " | Rol: " + rol;
    }
}
export default `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    // Correctly use vUv and vDisplacement to calculate distortion
    float distort = vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);

    // Compute color based on UV coordinates and distortion
    vec3 color = vec3(abs(vUv - 0.5) * (1.0 - distort), 1.0);

    // Output the final fragment color
    gl_FragColor = vec4(color, 1.0);
}




`;


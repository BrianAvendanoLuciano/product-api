export default function field(field) {
    if (field) {
        return field.split(',').join(' ');
    }

    return '*';
}
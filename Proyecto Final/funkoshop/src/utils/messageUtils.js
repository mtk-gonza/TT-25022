export const getFormMessages = (type, isUpdate = false, success = true) => {
    const actionVerb = isUpdate ? 'actualizar' : 'crear'
    const pastParticiple = isUpdate ? 'actualizado' : 'creado'
    const noun = isUpdate ? 'Actualización' : 'Creación'

    if (success) {
        return {
            title: `${type} ${pastParticiple}`,
            message: `${type} ${pastParticiple} exitosamente`,
        }
    } else {
        return {
            title: `Error al ${noun} ${type}`,
            message: `Hubo un problema al ${actionVerb} el ${type}`,
        }
    }
}
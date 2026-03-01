class CadastroCliente {
    constructor() {
        this.clientes = [];
        this.idCounter = 1;
    }

    adicionarCliente(nome, email, telefone, endereco) {
        if (!nome || !email || !telefone) {
            throw new Error('Nome, email e telefone são obrigatórios');
        }

        const cliente = {
            id: this.idCounter++,
            nome,
            email,
            telefone,
            endereco,
            dataCadastro: new Date()
        };

        this.clientes.push(cliente);
        return cliente;
    }

    buscarClientePorId(id) {
        return this.clientes.find(cliente => cliente.id === id);
    }

    buscarClientePorEmail(email) {
        return this.clientes.find(cliente => cliente.email === email);
    }

    atualizarCliente(id, dadosAtualizados) {
        const cliente = this.buscarClientePorId(id);
        if (!cliente) {
            throw new Error('Cliente não encontrado');
        }

        Object.assign(cliente, dadosAtualizados);
        return cliente;
    }

    removerCliente(id) {
        const index = this.clientes.findIndex(cliente => cliente.id === id);
        if (index === -1) {
            throw new Error('Cliente não encontrado');
        }

        return this.clientes.splice(index, 1);
    }

    listarClientes() {
        return this.clientes;
    }
}

module.exports = CadastroCliente;
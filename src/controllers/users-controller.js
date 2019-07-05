'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/users-repository');

exports.get = (req,res, next) => {
        repository
        .get()
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
    });
}

exports.getBySlug = (req,res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
    });
}

//example how to handle duplicated routes
exports.getById = (req,res, next) => {
    repository
    .getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
    });
}

//example how to handle duplicated routes
exports.getByTags = (req,res, next) => {
    repository
    .getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
    });
}

exports.post = (req,res, next) => {
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.first_name, 3,'O first_name deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.last_name, 3,'O last_name deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.email, 3,'O email deve conter pelo menos 3 caracteres');

    if (!contract.isValid())
    {
        res.status(400).send(contract.errors()).end();
        return;
    }

    repository.create(req.body)
        .then(x => {
            res.status(201).send({message: 'Usuario cadastrado com sucesso!'});
        }).catch(e => {
            res.status(400).send({message: 'Falha ao cadastrar produto!',data: e});
    });
}

exports.put = (req,res,next) => {
    repository
    .update(req.params.id,req.body)
        .then(x => {
            res.status(200).send({
                message: 'Produto atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar o produto!',
                data: e
            })
        });       
}

exports.delete = (req,res,next) => {
    repository.delete(req.body.id)
    .then(x => {
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover o produto!',
            data: e
        })
    });  
}
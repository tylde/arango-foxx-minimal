console.log('[MINIMAL] Main');

const queues = require('@arangodb/foxx/queues');
const locals = require('@arangodb/locals');
const createRouter = require('@arangodb/foxx').createRouter;
const context = require('@arangodb/locals').context;

const router = createRouter();
context.use(router);

const queue = queues.create('default');
const mount = locals.context.mount;
const jobId = queue.push({mount, name: 'job-main'}, {data: 'data'});
console.log('[MINIMAL] jobId:', jobId)

router.get('/queue/:queueName', (req, res) => {
    const {queueName} = req.pathParams;
    console.log(`[MINIMAL] [GET /queue/${queueName}]`);

    const queue = queues.create(queueName);
    res.send({
        pending: queue.pending(),
        progress: queue.progress(),
        complete: queue.complete(),
        failed: queue.failed()
    });
});

router.get('/queue/:queueName/:jobId', (req, res) => {
    const {queueName, jobId} = req.pathParams;
    console.log(`[MINIMAL] [GET /queue/${queueName}/${jobId}]`);

    const queue = queues.create(queueName);
    const job = queue.get(jobId);
    if (job) {
        res.status(200).send(job);
    } else {
        res.sendStatus(404);
    }
});

router.delete('/queue/:queueName/:jobId', (req, res) => {
    const {queueName, jobId} = req.pathParams;
    console.log(`[MINIMAL] [DELETE /queue/${queueName}/${jobId}]`);

    const queue = queues.create(queueName);
    const result = queue.delete(jobId);
    res.status(200).send({cancelled: result});
});

router.post('/queue/:queueName/:scriptName', (req, res) => {
    const mount = locals.context.mount;
    const {queueName, scriptName} = req.pathParams;
    console.log(`[MINIMAL] [/POST /queue/${queueName}/${scriptName}]`);

    const queue = queues.create(queueName);
    const jobId = queue.push({mount, name: scriptName}, {data: 'data'});
    res.status(201).send(jobId);
});

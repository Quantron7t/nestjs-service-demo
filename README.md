##Run Command 

`npm run start`

`npm run start:dev` for watching changes

## Test Request
>
>curl --location --request GET 'localhost:3000/' \
>--header 'user-id: 5758bfe5-13a1-44c3-bc76-a20726e8688c'
>

Expected logs after executing above curl 

```sh
[Nest] 9528  - 07/01/2022, 9:21:55 PM     LOG [NestFactory] Starting Nest application...
[Nest] 9528  - 07/01/2022, 9:21:55 PM     LOG [InstanceLoader] AppModule dependencies initialized +44ms
[Nest] 9528  - 07/01/2022, 9:21:55 PM     LOG [RoutesResolver] AppController {/}: +10ms
[Nest] 9528  - 07/01/2022, 9:21:55 PM     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 9528  - 07/01/2022, 9:21:55 PM     LOG [NestApplication] Nest application successfully started +2ms
[Nest] 9528  - 07/01/2022, 9:21:58 PM     LOG [UserMiddleware] 5758bfe5-13a1-44c3-bc76-a20726e8688c
[Nest] 9528  - 07/01/2022, 9:21:58 PM   DEBUG [RequestInterceptor] Request Client: PostmanRuntime/7.29.0
[Nest] 9528  - 07/01/2022, 9:21:58 PM   DEBUG [RequestInterceptor] Response: UserID 5758bfe5-13a1-44c3-bc76-a20726e8688c
[Nest] 9528  - 07/01/2022, 9:21:58 PM     LOG [RequestInterceptor] Request timestamp: 1656690718818
```

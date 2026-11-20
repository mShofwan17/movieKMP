import SwiftUI
import SharedLogic

@main
struct iOSApp: App {
    private let container: AppContainer

    init() {
        KoinIosKt.doInitKoinIos()
        container = AppContainer()
    }

    var body: some Scene {
        WindowGroup {
            RootView(container: container)
        }
    }
}

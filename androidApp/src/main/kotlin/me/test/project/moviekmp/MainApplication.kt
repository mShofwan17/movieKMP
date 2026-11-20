package me.test.project.moviekmp

import android.app.Application
import me.test.project.moviekmp.core.sharedModule
import me.test.project.moviekmp.di.androidMovieViewModelModule
import org.koin.android.ext.koin.androidContext
import org.koin.core.context.startKoin

class MainApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        startKoin {
            androidContext(this@MainApplication)
            modules(sharedModule + androidMovieViewModelModule)
        }
    }
}
